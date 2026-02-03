<script setup lang="ts">
const props = defineProps<{
  dailyBroadcast: DailyBroadcast
}>()

const formattedDailyBroadcast = computed(() => getFormattedDailyBroadcast(props.dailyBroadcast))

</script>

<template>
  <div class="hourly">
    <div class="hourly__content">
      <div class="hourly__item item"
           v-for="(item, index) in formattedDailyBroadcast?.list"
           :key="index"
           :class="{'item__newDay': isNewDay(index, formattedDailyBroadcast)}"
      >
        <div class="item__time">
          {{ item.type === 'sunrise' ? item.time : getTime(item.dt_txt) }}
        </div>
        <div class="item__icon">
          <img
              class="icon"
              :src="(item.type === 'sunrise' ?
              `https://yandex-pogoda.static-storage.net/1b7H66R18/cc7aaeEFNgn/8sYG28DPDqHfteftk2H1T4CUJmaAkCw7wD1Q0xNFY67t_59ViokbMsBg8yD0jpeRCf8iAsgGkdUjl6asAsJZ5nffWsBOx8WvE3qsZwtkNEkSUKE1QRdisIPziRHRA-jrODZdnM4Jm3HFpW3ltkMZxon4JtmCRBYR41jjoEaY1CMz3JHNjI7Cr5oxKeHNpPFAGNplrkDZ6_uVu4qQHgPhY_UzEtvIw9Z3CmipqveAmEkINCbUi8WaVypWZKrHVdFu89SYhA_Dg6EVe6mpSGqyjBiaLqRI3qB33ztHld4G4KOy-d6fgEfcf0Ih5eeygxfDjf4glUpEGBNn2qJjilkWLzaTXwOChIqg2Xohq0AhtUkT1K5rx5Yl9B9ywBnQgKEn-zrYUIdAX7KLJmrkOoyehMV_odcFy9ibpBKjq8tV0Ci02htJRAqA4B4y7qlOYjhGV5AmpI_SafvftkbRG8uiZ31zHN2LiFdxQG2qID0GFcgG96JUD88eHiEfoGkM2tWuvJaWSUZNSSxTuecuzed6iFVQp6vAE2n0XXXI3F2OYuF6PxZcDg-XOo-g4W1-Q1wOybBok0xLHBmn1WniDpkYp7val8VNBYjpmnkm5A0ofgGXmyQkw5mnPxA2jtyXym2ivT2ZHQHLGPfCKKQjuEkYCIX2KpwFj1eeId8grcgfn6H01pwLAoZIqtJ94ylIIjUHVtGha4PeZjnevoGc28TrZvR-HZMNR9e2wWOoI3GO3MsPP6IbAsLW3GnVIqoD0VhgOJpVgkYDQG0d866ojKBxxl9Yq2jD1qd6WfYAGt2P4eC9dhffhw-eMUFvaCR9QJDChLkvlQBE3BIuVuUhjNzWazSdWYKPDQNoFHusaI6nf0MXUqEiAZHktBN1TVPVwiNrsr-akkeHm_EFpWSnf8vWhgzyIZSDA1pUqVnqKAscVmL7GduGBkuIKNN2b2kBZHiBENBqpAEWLbpdukdTWgRkK7x0Ft3BDRg3ySvhav3OU0yDNiibQM9cWCsU6qxAlFCjPVWWBYjNBmqVMu4kBen4SFab7WJA3iB3l_JH2tbAoyMztNXSzkGQ_wNvpST5yBbPCPkomsOPFVdv3WcrxZKRZb-dG4UEhYvpWvxtJQXmsIgWmGXqxBqhPxp7TRSZwqXq-n7ekgNKG3hFYWhjPcpcgca75l8MQlJY61RoogtaGaB7kZWCA8JBJdewaWyDYPUCGZlrbQHQbPUYtQPR2wKh7rozVlcByxbywqYobbbGkQENsWFVjAXYGWESqCxPV17rO9xfwI9DweZbtGypS-MwRl9QpG9OUGP60HxAE5WDaG7_upTUhYkZ8wHvreu8BBSJDn8m04CMHtvjVucqBRLdp3dRXYEHQ8AhGbkkKwqufQFa0CVkgx5kPhKzCJKag-4m8H-VXUNDnjZJpq5ncUrViQb5oZWIQt7e7JztKA-RniC3nB6JBAHI7RZ1oaFJoryEkt_m6IYWI_bedkvUWkPta3z50ZoGAxp2gyykZ7aDWEqNv2pVCgeX1ibYpCSDWl1juF0WgoZFiWcZ-iAtyCK3Bpmd66wDHGk-m7NGmBtE66e9ORCVAEpcsg6nZOJwApsEx3bmF0lGGJFs3qnlx5AWqPLRn80HSUrv1rvrIYWjP4eVWKZlCJOhf5t-gBDei6Zuff2UGoZOlzhGI2xrN4efR8Y7IFKIyl_YKVjh6U0RXCn02t4BhEUCphV27CSILzjMEtElpAFTIH-V9Ipb2MJsrLQ6HNWOwNj3yijh5DjHVQlIe6BTQk`
              :`http://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`)"
              alt=""
          >
        </div>
        <div class="item__temp">
          {{ item.type === 'sunrise' ? 'Восход' : Math.round(item.main.temp) + '°'}}
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.hourly {
  &__content {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    position: relative;
    padding-left: 14px;

    &__newDay::before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      bottom: 10px;
      width: 1px;
      background: rgba(255, 255, 255, .25);

    }

    &__time {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: -6px;
      color: #D9D9D9;
    }

    &__icon {
      .icon {
        width: 45px;
        height: 45px;
      }
    }

    &__temp {
      font-weight: 500;
      font-size: 18px;
      color: #E8E8E8;
    }
  }
}
</style>