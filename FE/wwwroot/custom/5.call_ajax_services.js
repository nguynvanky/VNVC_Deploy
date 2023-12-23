var _callAjax = (function () {
	var urlApi = localStorage.getItem("BaseUrlApi");
	var _auth = {
		Login: function ($formLogin) {
			var request = _constructorCommon.auth.Login($formLogin);
			var configAjax = {
				url: '/Auth/Login',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (res) {
					var data = res.data ?? res;
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						RedirectToUrl(res);
					}
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		ForgetPassword: function ($formForgetPassword) {
			var email = $formForgetPassword.find("#Email").val();
			var configAjax = {
				url: '/Auth/ForgetPassword?email=' + email,
				type: 'POST',
				success: function (res) {
					var data = res.data ?? res;
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
						setTimeout(function () {
							RedirectToUrl(res);
						}, 2000);
					}
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		ResendPinCode: function (email, callBack) {
			var configAjax = {
				url: '/Auth/ForgetPassword?email=' + email,
				type: 'POST',
				success: function (res) {
					var data = res.data ?? res;
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					}
					else {
						callBack();
					}
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		ConfirmPinCode: function (pincode, userId) {
			var request = {
				Pincode: pincode,
				UserId: userId
			};
			var configAjax = {
				url: '/Auth/ConfirmPincode',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (res) {
					var data = res.data ?? res;
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
						setTimeout(function () {
							RedirectToUrl(res);
						}, 2000);
					}
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		ConfirmRegister: function (pincode, userId) {
			var request = {
				Pincode: pincode,
				UserId: userId
			};
			var configAjax = {
				url: '/Auth/ConfirmRegister',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (res) {
					var data = res.data ?? res;
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
						setTimeout(function () {
							RedirectToUrl(res);
						}, 2000);
					}
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		CheckEmail: function ($email, callBack) {
			if ($email.val() != "") {
				var configAjax = {
					url: urlApi + '/orther/check/email/' + $email.val(),
					type: 'GET',
					beforeSend: function () { },
					complete: function () { },
					success: function (data) {
						callBack(data);
					},
				}
				var callAjax = new AjaxOption(configAjax);
				callAjax.run();
			}
		},
		CheckUsername: function ($username, callBack) {
			if ($username.val() != "") {
				var configAjax = {
					url: urlApi + '/orther/check/username/' + $username.val(),
					type: 'GET',
					beforeSend: function () { },
					complete: function () { },
					success: function (data) {
						callBack(data);
					},
				}
				var callAjax = new AjaxOption(configAjax);
				callAjax.run();
			}
		},
		CheckPhoneNumber: function ($phoneNumber, callBack) {
			if ($phoneNumber.val() != "") {
				var configAjax = {
					url: urlApi + '/orther/check/phone-number/' + $phoneNumber.val(),
					type: 'GET',
					beforeSend: function () { },
					complete: function () { },
					success: function (data) {
						callBack(data)
					},
				}
				var callAjax = new AjaxOption(configAjax);
				callAjax.run();
			}
		},
		DeleteUser: function (userId) {
			var configAjax = {
				url: '/Admin/User/DeleteUser?userId=' + userId,
				type: 'Get',
				beforeSend: function () { },
				complete: function () { },
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.data);
					} else {
						ShowPopupSuccess(data.data);
						setTimeout(function () {
							window.location.reload();
						}, 1500);
					}
				},
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		ActiveUser: function (userId) {
			var configAjax = {
				url: '/Admin/User/ActiveUser?userId=' + userId,
				type: 'Get',
				beforeSend: function () { },
				complete: function () { },
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.data);
					} else {
						ShowPopupSuccess(data.data);
						setTimeout(function () {
							window.location.reload();
						}, 1500);
					}
				},
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		}
	};

	var _information = {
		UpdateProfile: function (address, $formUpdate) {
			var request = _constructorCommon.information.UpdateProfile(address, $formUpdate)
			console.log(request);
			var configAjax = {
				url: '/Account/UpdateInformation',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (data) {
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.data);
						setTimeout(function () {
							location.reload();
						}, 2000);
					}
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		ChangePassword: function ($formChangePassword) {
			var request = _constructorCommon.information.ChangePassword($formChangePassword)
			var configAjax = {
				url: '/Account/ChangePassword',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (res) {
					HideAllModal();
					var data = res.data ?? res;
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
					}
					setTimeout(function () {
						location.reload();
					}, 1500);
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		}
	};
	var _registrationVaccination = {
		Registration: function ($form) {
			var request = {
				FullName: $form.find("#fullName").val(),
				Email: $form.find("#email").val(),
				Phone: $form.find("#phone").val(),
				Dob: $form.find("#dob").val(),
				Address: $form.find("#address").val(),
				Gender: $form.find("#gender option:selected").val() == "true" ? true : false,
				IdVaccine: $form.find("#vaccine option:selected").val(),
				IdVaccinationCenter: $form.find("#center option:selected").val(),
				VaccinationDate: $form.find("#vaccinationDate").val(),
				CodeCustomer: $form.find("#codeCustomer").val()
			}
			var configAjax = {
				url: '/VaccinationRegistration/Registration',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
						setTimeout(function () {
							location.reload();
						}, 1500);
					}
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		RegistrationByAdmin: function ($form) {
			var request = {
				IdVaccine: $form.find("#vaccine option:selected").val(),
				IdVaccinationCenter: $form.find("#center option:selected").val(),
				VaccinationDate: $form.find("#vaccinationDate").val(),
				CodeCustomer: $form.find("#customer option:selected").val()
			}
			var configAjax = {
				url: '/Admin/RegistrationVaccination/Create',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (res) {
					var data = res.data ?? res;

					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
						setTimeout(function () {
							RedirectToUrl(res);
						}, 1500);
					}
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		Update: function ($form) {
			var request = {
				Id: $form.find("#id").val(),
				IdVaccineBatch: $form.find("#vaccineBatch option:selected").val(),
				IdVaccinationCenter: $form.find("#centerVaccination option:selected").val(),
				VaccinationDate: $form.find("#vaccinationDate").val(),
				Note: $form.find("#note").val(),
			}
			var configAjax = {
				url: '/Admin/RegistrationVaccination/Update',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
					}
					setTimeout(function () {
						location.reload();
					}, 1500);
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		UpdateWithStatus: function (status, $form) {
			var request = {
				Id: $form.find("#id").val(),
				IdVaccineBatch: $form.find("#vaccineBatch option:selected").val(),
				IdVaccinationCenter: $form.find("#centerVaccination option:selected").val(),
				VaccinationDate: $form.find("#vaccinationDate").val(),
				Note: $form.find("#note").val(),
				Status: status
			}
			var configAjax = {
				url: '/Admin/RegistrationVaccination/Update',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
					}
					setTimeout(function () {
						location.reload();
					}, 1500);
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		GetCustomerByCode: function (codeCustomer, callBack) {
			var configAjax = {
				url: '/VaccinationRegistration/GetCustomerByCode?codeCustomer=' + codeCustomer,
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						callBack(data.data)
					}
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		UpdateDetail: function ($form) {
			var status = $form.find("#status option:selected").val();
			console.log(status);
			var request = {
				Id: $form.find("#id").val(),
				Description: $form.find("#description").val(),
				Status: status == "underfined" ? "" : status
			}
			var configAjax = {
				url: '/Admin/RegistrationVaccination/UpdateDetail',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
					}
					setTimeout(function () {
						location.reload();
					}, 1500);
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
	};
	var _medicalRecord = {
		Create: function ($form) {
			var request = {
				IdCustomer: $form.find("#customer option:selected").val(),
			}
			var configAjax = {
				url: '/Admin/MedicalRecord/Create',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
					}
					setTimeout(function () {
						location.reload();
					}, 1500);
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		CreateDetail: function ($form) {
			var request = {
				BodyTemperature: $form.find("#bodyTemperture").val(),
				BackgroundIllness: $form.find("#backgroundIll").val(),
				Height: $form.find("#height").val().trim(),
				Weight: $form.find("#weight").val().trim(),
				BloodPressure: $form.find("#bloodPressure").val().trim(),
				MedicalHistory: $form.find("#medicalHistory").val().trim(),
				CurrentHealthStatus: $form.find("#currentHealthStatus").val().trim(),
				BackgroundIllness: $form.find("#backgroundIll").val().trim(),
				IdMedicalRecord: $form.find("#idMedicalRecord").val().trim(),
			}
			var configAjax = {
				url: '/Admin/MedicalRecord/CreateDetail',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.data);
					}
					setTimeout(function () {
						location.reload();
					}, 1500);
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		UpdateDetail: function ($form) {
			var request = {
				BodyTemperature: $form.find("#bodyTemperture").val().trim(),
				BackgroundIllness: $form.find("#backgroundIll").val().trim(),
				Height: $form.find("#height").val().trim(),
				Weight: $form.find("#weight").val().trim(),
				BloodPressure: $form.find("#bloodPressure").val().trim(),
				MedicalHistory: $form.find("#medicalHistory").val().trim(),
				CurrentHealthStatus: $form.find("#currentHealthStatus").val().trim(),
				BackgroundIllness: $form.find("#backgroundIll").val().trim(),
				IdMedicalRecord: $form.find("#idMedicalRecord").val(),
				Id: $form.find("#id").val(),
			}
			var configAjax = {
				url: '/Admin/MedicalRecord/UpdateDetail',
				type: 'POST',
				data: JSON.stringify(request),
				success: function (data) {
					HideAllModal();
					if (!data.isSuccess) {
						ShowPopupFail(data.message);
					} else {
						ShowPopupSuccess(data.message);
					}
					setTimeout(function () {
						location.reload();
					}, 1500);
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
	};
	var _historyVaccinationRegistration = {
		Filter: function ($form) {
			var request = {
				CodeCustomer: $form.find("#codeCustomer").val(),
				IdVaccineBatch: $form.find("#batches option:selected").val(),
				IdVaccinationCenter: $form.find("#centers option:selected").val(),
			}
			console.log(request)
			var configAjax = {
				url: '/Admin/HistoryVaccination/FilterHistory',
				type:'POST',
				data: JSON.stringify(request),
				success: function (data) {
					location.reload();
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		},
		ClearFilter: function () {
			var configAjax = {
				url: '/Admin/HistoryVaccination/ClearFilterHistory',
				success: function (data) {
					location.reload();
				}
			}
			var callAjax = new AjaxOption(configAjax);
			callAjax.run();
		}
	}
	return {
		auth: _auth,
		information: _information,
		registrationVaccination: _registrationVaccination,
		medicalRecord: _medicalRecord,
		historyVaccinationRegistration: _historyVaccinationRegistration
	};
})();