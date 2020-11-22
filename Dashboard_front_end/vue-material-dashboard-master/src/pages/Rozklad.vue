<template>
  <div class="content">
    <div class="md-layout">
		<div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Rozklad jazdy linii autobusowej nr 1</h4>
            <p class="category">ul. Akacjowa - ul. Bukowa</p>
          </md-card-header>
          <md-card-content>
            <bus-schedule table-header-color="green"></bus-schedule>
          </md-card-content>
        </md-card>
      </div>

	  <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Rozklad jazdy linii autobusowej nr 2</h4>
            <p class="category">ul. Cedrowa - ul. Dworcowa</p>
          </md-card-header>
          <md-card-content>
            <bus-schedule table-header-color="green"></bus-schedule>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { //SimpleTable,
 //OrderedTable, 
 BusSchedule
  } from "@/components";

export default {
  components: {
    //OrderedTable,
	//SimpleTable,
	BusSchedule
  }
};
</script>
