<script>
import { h } from "vue";
export default {
  setup() {
    return () =>
      h(
        <footer class="footer">
          <div class="pagination">
            <div class="pagination__data">
              Показаны <i>1-10</i> из <i>46</i>
            </div>
            <div class="pagination__lists">
              <div class="left__arrow">
                <img src="/assets/imgs/left_arrow.svg" alt="" />
              </div>
              <div class="lists">
                <div class="list">1</div>
                <div class="list">2</div>
                <div class="list">3</div>
                <div class="list">4</div>
              </div>
              <div class="right__arrow">
                <img src="/assets/imgs/right_arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </footer>
      );
  },
};
</script>
<style scoped lang="scss">
footer {
  margin: 0 20px;
}

.pagination {
  margin-top: -10;
  border-radius: 0px 0px 14px 14px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 90px;
  padding: 0 30px;
}

.pagination__data i {
  font-weight: 700;
}

.pagination__lists {
  display: flex;

  .left__arrow,
  .right__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid #c2c2c2;
    box-sizing: border-box;
    border-radius: 14px;

    &:hover {
      background: #1cbbff8a;
      box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.14);
    }
  }

  .lists {
    margin: 0 20px;
    display: flex;
    border: 1px solid #c2c2c2;
    box-sizing: border-box;
    border-radius: 14px;

    .list {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #202020;
      width: 50px;
      height: 50px;

      &.active {
        background: #1cbbff8a;
        box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.14);
        border-radius: 14px;
        color: #fff;
      }

      &:hover {
        background: #1cbbff8a;
        -webkit-box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.14);
        box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.14);
        border-radius: 14px;
        color: #fff;
      }
    }
  }
}
</style>
