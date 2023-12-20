function ShowPopupSuccess(message, title) {
	var $modal = $('#modalAPI');
	$modal.find('.modal-title').html(title ?? "Thành công")
	$modal.find('.modal-text').html(message ?? "Thành công")
	$modal.modal("show");
}

function ShowPopupFail(message, title) {
	var $modal = $('#modalAPI');
	$modal.find('.modal-title').html(title ?? "Thất bại")
	$modal.find('.modal-text').html(message ?? "Thất bại")
	$modal.modal("show");
}
function RedirectToUrl(res) {
	window.location.href = res.url ?? res
}
function AppendLoading() {
	if ($('body').find(".loading").length == 0) {
		var div = document.createElement('div');
		div.classList.add("loading");
		document.body.appendChild(div);
	}
}
function RemoveLoading() {
	const loader = document.querySelector(".loading")
	loader.classList.add("loading-hidden")
	loader.addEventListener("transitionend", () => {
		setTimeout(function () {
			try {
				const load = document.querySelector(".loading")
				document.body.removeChild(load);
			} catch (e) {
			}
		}, 500);
	});
}
$(function () {
	// Handle provinces select
	if ($(".slc-cities").length > 0) {
		var $cities = $(".slc-cities");
		_callAjax.common.LoadCities(function (data) {
			$cities.html(data);
		});

		$cities.on("change", function () {
			$districts = $(".slc-districts");
			var idCity = $cities.find("option:selected").val();
			_callAjax.common.LoadDistricts(idCity, function (data) {
				$districts.html(data);

				// Remove existing "change" event handlers on districts
				$districts.off("change");

				$districts.on("change", function () {
					console.log("district call api");
					$wards = $(".slc-wards");
					var idDistricts = $districts.find("option:selected").val();
					_callAjax.common.LoadWards(idDistricts, function (data) {
						$wards.html(data);
					});
				});
			});
		});
	}
	// handle input enter only digit
	$(".number-only").on("keydown", function (e) {
		// Only allow if the e.key value is a number or if it's 'Backspace'
		if (isNaN(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'Ctrl' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
			e.preventDefault();
		}
	});
});
function HideAllModal() {
	$(".modal").modal("hide");
}