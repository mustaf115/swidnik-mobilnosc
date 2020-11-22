<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Zgłoszenia</h4>
            <p class="category">Zgłoszenia problemów przesyłanych przez mieszkańców  Świdnika</p>
          </md-card-header>
          <md-card-content>
            <questionaire-table table-header-color="green"></questionaire-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { 
	//SimpleTable, 
QuestionaireTable,
//OrderedTable 
} from "@/components";

export default {
  components: {
    //OrderedTable,
	//SimpleTable,
	QuestionaireTable
  }
};
</script>
