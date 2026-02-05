<script setup lang="ts">
const props = defineProps<{
  dailyBroadcast: DailyBroadcast
}>()
const formattedDailyBroadcast = computed(() => getFormattedDailyBroadcast(props.dailyBroadcast))
const slider = useHorizontalSlider({
  itemWidth: 60.5,
  itemsPerPage: 3,
  totalItems: formattedDailyBroadcast.value?.list.length ?? 0
})
</script>

<template>
  <div class="hourly">
    <div class="hourly__viewport">
      <div
          class="hourly__content"
          :style="{ transform: `translateX(${slider.translateX.value}px)` }"
      >
        <div class="hourly__item item"
             v-for="(item, index) in formattedDailyBroadcast?.list"
             :key="index"
             :class="{'item__newDay': isNewDay(index, formattedDailyBroadcast)}"
        >
          <div class="item__time">
            {{ item.type === 'sunrise' || item.type === 'sunset' ? item.time : getTime(item.dt_txt) }}
          </div>
          <div class="item__icon">
            <img
                class="icon"
                :src="(item.type === 'sunrise' ?
                `https://yandex-pogoda.static-storage.net/1b7H66R18/cc7aaeEFNgn/8sYG28DPDqHfteftk2H1T4CUJmaAkCw7wD1Q0xNFY67t_59ViokbMsBg8yD0jpeRCf8iAsgGkdUjl6asAsJZ5nffWsBOx8WvE3qsZwtkNEkSUKE1QRdisIPziRHRA-jrODZdnM4Jm3HFpW3ltkMZxon4JtmCRBYR41jjoEaY1CMz3JHNjI7Cr5oxKeHNpPFAGNplrkDZ6_uVu4qQHgPhY_UzEtvIw9Z3CmipqveAmEkINCbUi8WaVypWZKrHVdFu89SYhA_Dg6EVe6mpSGqyjBiaLqRI3qB33ztHld4G4KOy-d6fgEfcf0Ih5eeygxfDjf4glUpEGBNn2qJjilkWLzaTXwOChIqg2Xohq0AhtUkT1K5rx5Yl9B9ywBnQgKEn-zrYUIdAX7KLJmrkOoyehMV_odcFy9ibpBKjq8tV0Ci02htJRAqA4B4y7qlOYjhGV5AmpI_SafvftkbRG8uiZ31zHN2LiFdxQG2qID0GFcgG96JUD88eHiEfoGkM2tWuvJaWSUZNSSxTuecuzed6iFVQp6vAE2n0XXXI3F2OYuF6PxZcDg-XOo-g4W1-Q1wOybBok0xLHBmn1WniDpkYp7val8VNBYjpmnkm5A0ofgGXmyQkw5mnPxA2jtyXym2ivT2ZHQHLGPfCKKQjuEkYCIX2KpwFj1eeId8grcgfn6H01pwLAoZIqtJ94ylIIjUHVtGha4PeZjnevoGc28TrZvR-HZMNR9e2wWOoI3GO3MsPP6IbAsLW3GnVIqoD0VhgOJpVgkYDQG0d866ojKBxxl9Yq2jD1qd6WfYAGt2P4eC9dhffhw-eMUFvaCR9QJDChLkvlQBE3BIuVuUhjNzWazSdWYKPDQNoFHusaI6nf0MXUqEiAZHktBN1TVPVwiNrsr-akkeHm_EFpWSnf8vWhgzyIZSDA1pUqVnqKAscVmL7GduGBkuIKNN2b2kBZHiBENBqpAEWLbpdukdTWgRkK7x0Ft3BDRg3ySvhav3OU0yDNiibQM9cWCsU6qxAlFCjPVWWBYjNBmqVMu4kBen4SFab7WJA3iB3l_JH2tbAoyMztNXSzkGQ_wNvpST5yBbPCPkomsOPFVdv3WcrxZKRZb-dG4UEhYvpWvxtJQXmsIgWmGXqxBqhPxp7TRSZwqXq-n7ekgNKG3hFYWhjPcpcgca75l8MQlJY61RoogtaGaB7kZWCA8JBJdewaWyDYPUCGZlrbQHQbPUYtQPR2wKh7rozVlcByxbywqYobbbGkQENsWFVjAXYGWESqCxPV17rO9xfwI9DweZbtGypS-MwRl9QpG9OUGP60HxAE5WDaG7_upTUhYkZ8wHvreu8BBSJDn8m04CMHtvjVucqBRLdp3dRXYEHQ8AhGbkkKwqufQFa0CVkgx5kPhKzCJKag-4m8H-VXUNDnjZJpq5ncUrViQb5oZWIQt7e7JztKA-RniC3nB6JBAHI7RZ1oaFJoryEkt_m6IYWI_bedkvUWkPta3z50ZoGAxp2gyykZ7aDWEqNv2pVCgeX1ibYpCSDWl1juF0WgoZFiWcZ-iAtyCK3Bpmd66wDHGk-m7NGmBtE66e9ORCVAEpcsg6nZOJwApsEx3bmF0lGGJFs3qnlx5AWqPLRn80HSUrv1rvrIYWjP4eVWKZlCJOhf5t-gBDei6Zuff2UGoZOlzhGI2xrN4efR8Y7IFKIyl_YKVjh6U0RXCn02t4BhEUCphV27CSILzjMEtElpAFTIH-V9Ipb2MJsrLQ6HNWOwNj3yijh5DjHVQlIe6BTQk` :
                item.type === 'sunset' ? `https://yandex-pogoda.static-storage.net/YrI99T896/8fc8808ujJ/CRCFVH64uiym441e5DK9GfhOn8bp86_vW3hA3ycKisN1yGQo6NosZlzqZz39MU--Yw59DoCUFSPtU-ysDu3ykwoV2CQOgJodjc2rfsBVnQXtD4zG8Km1_3YICbkaMJfcboR1AdT-I0VRz2Be1x1ntCMKfj3IugYH5UPXlgfX8M01DvAIM4ScLaPXsn_zVJ0pzhW94Pn1teJAJnupFiGL7nSfYTDuzQNPWutrZP4eaJ0LLk4z6YEEGeVB-rwF3MjqPRv9EhKLlBWE2rhV6G6XJcolgvXG46LPfxBzswQYkuNQgEEE4-ojbE3qVXDIEm64CxxcAuikJTLeeNKSBfz7yzcX8BQUtYIptdGUR_19mjH4J4n2yuyN3GU5cKAcJLDEb410C9fkH0la3Vxk6yh7ux4yZAPiizwnxEbruSXL3uouJfscEqapF4Pvl0XrRr4-_iuF4snercV_A0uRBhmA_0eGRgno6BF1XMF2U9c9V4cUKmUP1pUHLdFa1JYk2MbaNzrUHCG2lg-g6Y1R_XCxLO0tg_r4877gZT5eiCYMtv1Wq0wWz8UdSWHqX1PtF3yvJDpHId-fHiHcRNK5EP7o8TcA0BM-i7Aasc-dZc5NnSrbJpDQ-cWM22YGaJcnLZPBbohIPfb_FHpu0lRk3xVKsj8JQgbuuz0-4WPxngb73e4dJcgNOIC8BaLNsEbqbpYZyxe77MX_qv5uO12IBAGx-nexYgrv3whEQ-lrVtUmebgqM14P-oonBvph9KMP9fj4FRPlHBmTkieG45pl9WagOcQtsMj49bTlZwNYowEzjc9Wv283zfsHVE_pY0X9OHGfOT9jLP-DBDLwQdWFE8j42igG8DcwlLkOu8eTfvNJvR3mFpjCxOap80gGS4A9Ho3vUKpuE-7EC2Vf3XRY1R5qniQtWTzIuCEf21HPiibS9_8WK_YrFK-dMYvMkXzlaIIRzQO76fjqru57J0q_HyGGxlSAZh3X1hJWXd53StUzSY0-JHsh154EEvVl6KMZ8vLpEgjuEQaggye44YtTy020MdoDmejb6oHGbRtluAMglOBsqkEw9-oXVHvjWUrQIXmnOBJNBt-mGhn0VtKFDPHo6DMt9TQarbA5pNOdZNdanyvhNb7Cy-2g3VseaIIXDojfS6ZRCvzmIHRt1n1h_yJvvzw0cjjGgyMbx2HVqSL73_sNJPYTIqKSKJzsvXvqSIkq-SWe19DihcZnE1GaOxiwx16vfRP03SZYScBBYMwaW6wHM1og-KcOH8Jx-Js76c7NNwvQMgitsxy17LRf0VCVFPQDpufH4objQz5IsgkYp_5iplI99eokanX2XX_vE3GaBRp9GfidIDrdSdW7A9zq7R8GxSElk5M6guuWTeprsgnpCYbi7dSu0ns0apgqIJ37VZ9AC__2I0dc6mZ6yBZInjoqYQ_shDU14UPmgTzA-tMrJ_kYBqqQHqHqvm7tabAb-huL9srsr-h4IXiDIzOJ_mOAaRb_6T94V-F8QeEUcJQeMGkC2JMZLetCxYYC3NfvCgjQGhysnSq5xJJe0FanJfoGkuzq_4TAfD9xqRkTpOxKrFIUwOwVaW_yWGjXPkmFJzheANmwJRLYUOOXJtLa0CwG2CwGuakJpcmzXu9OhS70GKvX48OM3XsgQpwCM5bFYYB3Bu3pLFJb7Et7_iJWgwoUSSjHhjMDwGjhhjLY8PIAKMstMouzPaH1kWbCc54F7g254sX9r9hDE3GRORCC1F-gRjDozwhQWOJyf8Amb4E_Ol4L4oI`
                :`http://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`)"
                alt=""
            >
          </div>
          <div class="item__temp">
            {{ item.type === 'sunrise' ? 'Восход': item.type === 'sunset' ? 'Закат' : Math.round(item.main.temp) + '°'}}
          </div>
        </div>
      </div>
      <button
          class="hourly__nav hourly__nav--left"
          @click="slider.prev"
          v-if="!(slider.currentIndex.value === 0)"
      >
        ‹
      </button>

      <button
          class="hourly__nav hourly__nav--right"
          @click="slider.next"
          :disabled="slider.currentIndex.value >= slider.maxIndex.value"
      >
        ›
      </button>
    </div>
  </div>
</template>


<style scoped lang="scss">
.hourly {
  position: relative;
  &__content {
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all .4s ease;
  }
  &__viewport {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  &__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #fff;
    background: rgba(30, 30, 30, 0.65);
    backdrop-filter: blur(6px);
    &:disabled {
      opacity: 0.3;
      pointer-events: none;
    }
  }
  &__nav--left {
    left: 8px;
  }
  &__nav--right {
    right: 8px;
  }
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

</style>