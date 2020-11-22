<template>
  <div class="content">

	  <div class="md-layout">
      <div class="md-layout-item">
        <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Filtr:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Dzisiaj" md-icon="bug_report">
				<chart-card
				:chart-data="dataCompletedTasksChart.data"
				:chart-options="dataCompletedTasksChart.options"
				:chart-type="'Bar'"
				data-background-color="green"
				>
				<template slot="content">
					<h4 class="title">Natężenie ruchu</h4>
					<p class="category">
					21/11/2020
					</p>
				</template>

				<template slot="footer">
					<div class="stats">
					<md-icon>access_time</md-icon>
					odświeżono 5 minut temu
					</div>
				</template>
				</chart-card>
              </md-tab>

              <md-tab id="tab-pages" md-label="ten tydzień" md-icon="code">
					<chart-card
			:chart-data="dailySalesChart.data"
			:chart-options="dailySalesChart.options"
			:chart-type="'Bar'"
			data-background-color="green"
			>
			<template slot="content">
				<h4 class="title">Natężenie ruchu</h4>
				<p class="category">
				16/11/2020 - 22/11/2020
				</p>
			</template>

			<template slot="footer">
				<div class="stats">
				<md-icon>access_time</md-icon>
				odświeżono 5 minut temu
				</div>
			</template>
			</chart-card>
              </md-tab>

              <md-tab id="tab-posts" md-label="ten miesiąc" md-icon="cloud">
				  <chart-card
			:chart-data="monthlyChart.data"
			:chart-options="monthlyChart.options"
			:chart-type="'Bar'"
			data-background-color="green"
			>
			<template slot="content">
				<h4 class="title">Natężenie ruchu</h4>
				<p class="category">
				Listopad
				</p>
			</template>

			<template slot="footer">
				<div class="stats">
				<md-icon>access_time</md-icon>
				odświeżono 5 minut temu
				</div>
			</template>
			</chart-card>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
    </div>
      </div>
    </div>

	<div class="md-layout">
      <div class="md-layout-item">
        <div class="md-layout">
			<div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <md-icon>commute</md-icon>
          </template>

          <template slot="content">
            <p class="category">Dziesiejszy ruch</p>
            <h3 class="title">1738 (+13% od wczoraj)</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Ostatnie 24 godziny
            </div>
          </template>
        </stats-card>
      </div>

	  <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Wykryte korki</p>
            <h3 class="title">3</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              Zobacz mapę
            </div>
          </template>
        </stats-card>
      </div>

	  <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>recent_actors</md-icon>
          </template>

          <template slot="content">
            <p class="category">Nowe zgłoszenia</p>
            <h3 class="title">
              27
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Zobacz zgłoszenia</a>
            </div>
          </template>
        </stats-card>
      </div>
    </div>
      </div>
    </div>
		<div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Statystyki ruchu</h4>
            <p class="category">Najbardziej zatłoczone ulice: (21/11/2020)</p>
          </md-card-header>
          <md-card-content>
            <street-table table-header-color="orange"></street-table>
          </md-card-content>
        </md-card>
      </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  //NavTabsTable,
  //OrderedTable,
  StreetTable,
} from "@/components";

export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    //NavTabsTable,
	//OrderedTable,
	StreetTable,
  },
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
          series: [[1200, 1700, 4500, 1700, 2030, 1800, 3800, ]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 5000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
	  },
	  monthlyChart: {
        data: {
          labels: ["1 tydzień", "2 tydzień", "3 tydzień", "4 tydzień"],
          series: [[8230, 7500, 6450, 9000]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 10000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  }
};
</script>
