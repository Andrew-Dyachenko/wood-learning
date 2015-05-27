<?php include 'header.php'; ?>
<div class="container">

	<!-- Главная. / Main. -->
	<main>
		<h1>
			Проверочный материал
		</h1>
		<div role="tabpanel">

	<!-- Nav tabs -->
	<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" class="active">
			<a href="#commonTest" aria-controls="home" role="tab" data-toggle="tab">
				Общий тест
			</a>
		</li>
		<li role="presentation">
			<a href="#physicalAndMechanical" aria-controls="profile" role="tab" data-toggle="tab">
				Физико-механический тест
			</a>
		</li>
	</ul>

	<!-- Tab panes -->
	<div class="tab-content">
		<div role="tabpanel" class="tab-pane fade in active" id="commonTest">
			<h2 class="text-center">
				Обобщающий тест:
			</h2>
			<form onsubmit="javascript: void(0);">
				<div class="form-group">
					<label>
						1.К физическим свойствам древесины относятся:
					</label>
					<div class="radio">
						<label>
							<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
							Option one is this and that&mdash;be sure to include why it's great
						</label>
					</div>
					<div class="radio">
						<label>
							<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
							Option two can be something else and selecting it will deselect option one
						</label>
					</div>
					<div class="radio disabled">
						<label>
							<input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
							Option three is disabled
						</label>
					</div>
				</div>
			</form>
		</div>
		<div role="tabpanel" class="tab-pane fade" id="physicalAndMechanical">
			<h2 class="text-center">
				Физико-механические свойства древесины:
			</h2>
			<form onsubmit="javascript: void(0);"></form>
		</div>
	</div>
</div>
	</main>
</div>
<?php include 'footer.php'; ?>