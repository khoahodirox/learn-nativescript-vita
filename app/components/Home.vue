<template>
  <Page actionBarHidden="true" enableSwipeBackNavigation="false">
    <GridLayout rows="auto, *">
      <GridLayout row="0" columns="74, *, 74" class="header_bar">
        <GridLayout col="0" width="44" height="44" horizontalAlignment="left" @tap="goBack">
          <SVGView src="~/assets/icons/chevron_left.svg" width="24" height="24" horizontalAlignment="center"
            verticalAlignment="center" />
        </GridLayout>

        <Label col="1" :text="'REMUNERATION\nNovembre 2022'" textWrap="true" textAlignment="center"
          verticalAlignment="center" class="header_title" />

        <StackLayout col="2" orientation="horizontal" horizontalAlignment="right">
          <GridLayout width="30" height="44" @tap="onAlert">
            <SVGView src="~/assets/icons/light_emergency_on_light_2.svg" width="30" height="24"
              horizontalAlignment="center" verticalAlignment="center" />
          </GridLayout>
          <GridLayout width="44" height="44" @tap="onMenu">
            <SVGView src="~/assets/icons/burger.svg" width="24" height="24" horizontalAlignment="center"
              verticalAlignment="center" />
          </GridLayout>
        </StackLayout>
      </GridLayout>


      <ListView row="1" :items="documents" separatorColor="transparent" class="list" @itemTap="onItemTap">
        <template #default="{ item }">
          <StackLayout class="row">
            <GridLayout columns="auto, *, auto" class="card">
              <GridLayout col="0" width="44" height="44" horizontalAlignment="left">
                <SVGView col="0" src="~/assets/icons/document.svg" width="20" height="24" verticalAlignment="center"
                  class="card_icon" />
              </GridLayout>

              <StackLayout col="1" verticalAlignment="center" class="card_content">
                <Label :text="item.title" textWrap="true" class="card_title" />
                <Label :text="item.date" class="card_date" />
              </StackLayout>

              <GridLayout col="2" width="44" height="44" horizontalAlignment="left">
                <SVGView col="2" src="~/assets/icons/chevron_right.svg" width="44" height="44"
                  verticalAlignment="center" />
              </GridLayout>
            </GridLayout>
          </StackLayout>
        </template>
      </ListView>

    </GridLayout>
  </Page>
</template>

<script>
import { Dialogs, Frame } from '@nativescript/core'

export default {
  data() {
    return {
      documents: [
        { id: 1, title: 'Bulletin de salaire', date: '21.05.2024' },
        { id: 2, title: 'Bulletin de salaire complémentaire', date: '21.05.2024' },
        { id: 3, title: 'Autres docs au nom long (ex en 2 lignes)', date: '21.05.2024' },
      ]
    }
  },
  methods: {
    goBack() {
      // Home là trang đầu tiên nên chưa có trang nào để quay lại
      if (Frame.topmost()?.canGoBack()) {
        this.$navigateBack()
      } else {
        alert('Không có trang trước để quay lại')
      }
    },
    onAlert() {
      Dialogs.alert({
        title: 'Thông báo',
        message: 'Bạn vừa bấm chuông báo',
        okButtonText: 'OK'
      })
    },
    onMenu() {
      alert('Mở menu')
    },
    onItemTap(event) {
      const item = this.documents[event.index]
      alert(`Bạn vừa bấm vào mục: ${item.title}`)
    }
  }
}
</script>

<style scoped>
.header_bar {
  padding-left: 16;
  padding-right: 16;
  margin-top: 16;
  min-height: 44;
}

.header_title {
  color: #EC5F71;
  font-family: Roboto;
  font-size: 18;
  font-weight: 700;
}

.list {
  margin-top: 60;
  background-color: #FAF9F8;
}

.row {
  padding: 8 16;
  background-color: transparent;
}

.card {
  background-color: #FFFFFF;
  border-radius: 8;
  padding: 16;
}

.card_content {
  margin-left: 16;
}

.card_title {
  font-size: 16;
  font-weight: 400;
  font-family: Roboto;
  padding: 8 0;
  color: #1D1D1C;
}

.card_date {
  font-size: 13;
  font-weight: 300;
  font-family: Roboto;
  color: #1D1D1C;
}
</style>