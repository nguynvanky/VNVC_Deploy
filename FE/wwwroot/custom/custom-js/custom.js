///////////SUPPLIER///////////
$(document).ready(function () {
	$('.edit-supplier').on('click', function () {
		var row = $(this).closest('tr');
		var supplierId = $(this).data('supplier-id');
		var supplierName = row.find('td:eq(0)').text();
		var supplierAddress = row.find('td:eq(1)').text();
		var supplierPhone = row.find('td:eq(2)').text();
		var supplierEmail = row.find('td:eq(3)').text();

		$('#supplierIdEdit').val(supplierId.trim());
		$('#supplierNameEdit').val(supplierName.trim());
		$('#supplierAddressEdit').val(supplierAddress.trim());
		$('#supplierPhoneEdit').val(supplierPhone.trim());
		$('#supplierEmailEdit').val(supplierEmail.trim());
	});
});
$(document).ready(function () {
	$('.delete-supplier').on('click', function () {
		var supplierId = $(this).data('supplier-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/DeleteSupplier/',
					type: 'POST',
					data: { id: supplierId },
					success: function (result) {
						if (result.isSuccess) {
							//Swal.fire({
							//    icon: 'success',
							//    title: 'Success!',
							//    text: 'Xóa thành công !' + result.message
							//});
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});
//////////POSITION//////////

$(document).ready(function () {
	$('.edit-position').on('click', function () {
		var row = $(this).closest('tr');
		var positionId = $(this).data('position-id');
		var positionName = row.find('td:eq(0)').text();

		$('#positionIdEdit').val(positionId.trim());
		$('#positionNameEdit').val(positionName.trim());
	});
});
$(document).ready(function () {
	$('.delete-position').on('click', function () {
		var positionId = $(this).data('position-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/CategoryPositionDelete/',
					type: 'POST',
					data: { id: positionId },
					success: function (result) {
						if (result.isSuccess) {
							//Swal.fire({
							//    icon: 'success',
							//    title: 'Success!',
							//    text: 'Xóa thành công !' + result.message
							//});
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});
/////////CategoryVaccine////////////

$(document).ready(function () {
	$('.edit-CategoryVaccine').on('click', function () {
		var row = $(this).closest('tr');
		var CategoryVaccineId = $(this).data('cgrvaccine-id');
		var CategoryVaccineName = row.find('td:eq(0)').text();
		$('#CategoryVaccineIdEdit').val(CategoryVaccineId.trim());
		$('#CategoryVaccineNameEdit').val(CategoryVaccineName.trim());
	});
});
$(document).ready(function () {
	$('.delete-CategoryVaccine').on('click', function () {
		var Id = $(this).data('cgrvaccine-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/CategoryVaccineDelete/',
					type: 'POST',
					data: { id: Id },
					success: function (result) {
						if (result.isSuccess) {
							//Swal.fire({
							//    icon: 'success',
							//    title: 'Success!',
							//    text: 'Xóa thành công !' + result.message
							//});
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});
/////////Customer////////////

$(document).ready(function () {
	$('.edit-customer').on('click', function () {
		var row = $(this).closest('tr');
		var CustomerIdEdit = $(this).data('customer-id');
		var FullNameEdit = row.find('td:eq(1)').text();
		var DateOfBirthEdit = row.find('td:eq(2)').text();
		var GenderEdit = row.find('td:eq(3)').text();
		var AddressEdit = row.find('td:eq(4)').text();
		var PhoneEdit = row.find('td:eq(5)').text();
		var EmailEdit = row.find('td:eq(6)').text();

		$('#CustomerIdEdit').val(CustomerIdEdit.trim());
		$('#FullNameEdit').val(FullNameEdit.trim());
		$('#EmailEdit').val(EmailEdit.trim());
		if ($.trim(GenderEdit.toLowerCase()) === 'nữ') {
			$('#GenderEdit').val('true');
		} else {
			$('#GenderEdit').val('false');
		}
		$('#AddressEdit').val(AddressEdit.trim());
		$('#PhoneEdit').val(PhoneEdit.trim());
		$('#DateOfBirthEdit').val(DateOfBirthEdit.trim());

	});
});

$(document).ready(function () {
	$('.delete-customer').on('click', function () {
		var Id = $(this).data('customer-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/CustomerDelete/',
					type: 'POST',
					data: { id: Id },
					success: function (result) {
						if (result.isSuccess) {
							//Swal.fire({
							//    icon: 'success',
							//    title: 'Success!',
							//    text: 'Xóa thành công !' + result.message
							//});
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});
$(() => {
	_configDatePicker.initDateMinus100($("#DateOfBirthEdit"));
	_configDatePicker.initDateMinus100($("#DateOfBirth"));
})

/////////vaccinationcenter////////////

$(document).ready(function () {
	$('.edit-vaccinationcenter').on('click', function () {
		var row = $(this).closest('tr');
		var VaccinationCenterIdEdit = $(this).data('vaccinationcenter-id');
		var CenterNameEdit = row.find('td:eq(0)').text();
		var AddressEdit = row.find('td:eq(1)').text();
		var PhoneNumberEdit = row.find('td:eq(2)').text();
		var OpenTimeEdit = row.find('td:eq(3)').text();
		var CloseTimeEdit = row.find('td:eq(4)').text();

		$('#VaccinationCenterIdEdit').val(VaccinationCenterIdEdit.trim());
		$('#CenterNameEdit').val(CenterNameEdit.trim());
		$('#PhoneNumberEdit').val(PhoneNumberEdit.trim());
		$('#AddressEdit').val(AddressEdit.trim());
		$('#CloseTimeEdit').val(CloseTimeEdit.trim());
		$('#OpenTimeEdit').val(OpenTimeEdit.trim());
	});
});

$(document).ready(function () {
	$('.delete-vaccinationcenter').on('click', function () {
		var Id = $(this).data('vaccinationcenter-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/VaccinationCenterDelete/',
					type: 'POST',
					data: { id: Id },
					success: function (result) {
						if (result.isSuccess) {
							//Swal.fire({
							//    icon: 'success',
							//    title: 'Success!',
							//    text: 'Xóa thành công !' + result.message
							//});
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});

/////////Employee////////////

$(document).ready(function () {
	$('.edit-employee').on('click', function () {
		var row = $(this).closest('tr');
		var IdEdit = $(this).data('employee-id');
		var FullName = row.find('td:eq(1)').text();
		var Address = row.find('td:eq(2)').text();
		var Phone = row.find('td:eq(3)').text();
		var Email = row.find('td:eq(4)').text();
		var Gender = row.find('td:eq(5)').text();
		var DateOfBirthEdit = row.find('td:eq(6)').text();
		var CategoryPosition = $(this).data('categoryposition-id');
		var VaccinationCenter = $(this).data('caccinationcenter-id');


		$('#IdEdit').val(IdEdit.trim());
		$('#FullNameEdit').val(FullName.trim());
		$('#AddressEdit').val(Address.trim());
		$('#PhoneEdit').val(Phone.trim());
		$('#EmailEdit').val(Email.trim());

		if ($.trim(Gender.toLowerCase()) === 'nữ') {
			$('#GenderEdit').val('true');
		} else {
			$('#GenderEdit').val('false');
		}
		$('#DateOfBirthEdit').val(DateOfBirthEdit.trim());
		$('#slcCategoryPositionEdit').val(CategoryPosition);
		$('#slcVaccinationventerEdit').val(VaccinationCenter);

	});
});

$(document).ready(function () {
	$('.delete-employee').on('click', function () {
		var Id = $(this).data('employee-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/EmployeeDelete/',
					type: 'POST',
					data: { id: Id },
					success: function (result) {
						if (result.isSuccess) {
							//Swal.fire({
							//    icon: 'success',
							//    title: 'Success!',
							//    text: 'Xóa thành công !' + result.message
							//});
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});


/////////Vaccine////////////

$(document).ready(function () {
	$('.edit-vaccine').on('click', function () {
		var row = $(this).closest('tr');
		var IdEdit = $(this).data('vaccine-id');
		var NameVaccineEdit = row.find('td:eq(0)').text();
		var ConditionEdit = row.find('td:eq(1)').text();
		var PreventionEdit = row.find('td:eq(2)').text();
		var InjectionSiteEdit = row.find('td:eq(3)').text();
		var ImageEdit = row.find('td:eq(5)').text();
		var categoryvaccine = $(this).data('categoryvaccine-id');


		$('#IdEdit').val(IdEdit.trim());
		$('#NameVaccineEdit').val(NameVaccineEdit.trim());
		$('#ConditionEdit').val(ConditionEdit.trim());
		$('#PreventionEdit').val(PreventionEdit.trim());
		$('#CategoryVaccineIdEdit').val(categoryvaccine.trim());
		$('#ImageEdit').val(ImageEdit.trim());
		$('#InjectionSiteEdit').val(InjectionSiteEdit.trim());

	});
});

$(document).ready(function () {
	$('.delete-vaccine').on('click', function () {
		var Id = $(this).data('vaccine-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/VaccineDelete/',
					type: 'POST',
					data: { id: Id },
					success: function (result) {
						if (result.isSuccess) {
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});
function openPopup(button) {
	var id = $(button).data('injectionchart-id');
	$.ajax({
		url: '/admin/manage/GetInjectionChartData',
		type: 'POST',
		data: { id: id },
		success: function (data) {
			console.log(data)
			$('#Doses').text(data.data.doses);
			$('#Interval').text(data.data.interval);
			$('#Reminder').text(data.data.reminder ? 'Nhắc lại' : 'Không nhắc lại');
			$('.bd-example-modal-lg2').modal('show');
		},
		error: function () {
			console.error('Failed to fetch data');
		}
	});
}
//////injectionchart/////////

$(document).ready(function () {
	$('.edit-injectionchart').on('click', function () {
		var row = $(this).closest('tr');
		var IdEdit = $(this).data('injectionchart-id');
		var DosesEdit = row.find('td:eq(0)').text();
		var IntervalEdit = row.find('td:eq(1)').text();
		var ReminderEdit = row.find('td:eq(2)').text();
		var injectionchartEdit = $(this).data('vaccine-id');

		if ($.trim(ReminderEdit.toLowerCase()) === 'Có') {
			$('#ReminderEdit').val('false');
		} else {
			$('#ReminderEdit').val('true');
		}
		$('#IdEdit').val(IdEdit.trim());
		$('#DosesEdit').val(DosesEdit.trim());
		$('#IntervalEdit').val(IntervalEdit.trim());
		$('#injectionchartEdit').val(injectionchartEdit.trim());

	});
});

$(document).ready(function () {
	$('.delete-injectionchart').on('click', function () {
		var Id = $(this).data('injectionchart-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/InjectionChartDelete/',
					type: 'POST',
					data: { id: Id },
					success: function (result) {
						if (result.isSuccess) {
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});


/////////Vaccine Batch////////////

$(document).ready(function () {
	$('.edit-vaccinebatch').on('click', function () {
		var row = $(this).closest('tr');
		var IdEdit = $(this).data('vaccinebatch-id');
		var CodeBatchEdit = row.find('td:eq(0)').text();
		var CountryEdit = row.find('td:eq(1)').text();
		var ManufacturingDateEdit = row.find('td:eq(2)').text();
		var ExpirationDateEdit = row.find('td:eq(3)').text();
		var QuantityOfVaccineEdit = row.find('td:eq(6)').text();
		var SupplierIdEdit = $(this).data('supplier-id');
		var VaccineIdEdit = $(this).data('vaccine-id');


		$('#IdEdit').val(IdEdit.trim());
		$('#CodeBatchEdit').val(CodeBatchEdit.trim());
		$('#CountryEdit').val(CountryEdit.trim());
		$('#ManufacturingDateEdit').val(ManufacturingDateEdit.trim());
		$('#ExpirationDateEdit').val(ExpirationDateEdit.trim());
		$('#SupplierIdEdit').val(SupplierIdEdit.trim());
		$('#VaccineIdEdit').val(VaccineIdEdit.trim());
		$('#QuantityOfVaccineEdit').val(QuantityOfVaccineEdit.trim());

	});
});

$(document).ready(function () {
	$('.delete-vaccinebatch').on('click', function () {
		var Id = $(this).data('vaccinebatch-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/VaccineBatchDelete/',
					type: 'POST',
					data: { id: Id },
					success: function (result) {
						if (result.isSuccess) {
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});

/////////Price Vaccine////////////

$(document).ready(function () {
	$('.edit-pricevaccine').on('click', function () {
		var row = $(this).closest('tr');
		var IdEdit = $(this).data('pricevaccine-id');
		var CostPriceEdit = row.find('td:eq(1)').text();
		var RetailPriceEdit = row.find('td:eq(2)').text();
		var PreOrderPriceEdit = row.find('td:eq(3)').text();
		var IdVaccineBacthEdit = $(this).data('vaccincebatch-id');


		$('#IdEdit').val(IdEdit.trim());
		$('#CostPriceEdit').val(CostPriceEdit.trim());
		$('#RetailPriceEdit').val(RetailPriceEdit.trim());
		$('#PreOrderPriceEdit').val(PreOrderPriceEdit.trim());
		$('#IdVaccineBacthEdit').val(IdVaccineBacthEdit.trim());

	});
});

$(document).ready(function () {
	$('.delete-pricevaccine').on('click', function () {
		var Id = $(this).data('pricevaccine-id');
		Swal.fire({
			title: 'Bạn có chắc chắn ?',
			text: 'Bạn sẽ không thể phục hồi được dữ liệu này !',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Vâng, Xóa đi !'
		}).then((result) => {
			if (result.value) {
				$.ajax({
					url: '/Admin/Manage/PriceVaccineDelete/',
					type: 'POST',
					data: { id: Id },
					success: function (result) {
						if (result.isSuccess) {
							location.reload();
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error!',
								text: 'Xóa thất bại !' + result.message
							});
						}
					},
					error: function (error) {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: 'Lỗi ' + error.statusText
						});
					}
				});
			}
		});
	});
});