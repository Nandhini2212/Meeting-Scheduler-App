import React from "react";

const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-container__header">
        <button className="calendar-container__btn calendar-container__btn--left" title="Previous">
          <i className="icon ion-ios-arrow-back"></i>
        </button>
        <h2 className="calendar-container__title">October 2018</h2>
        <button className="calendar-container__btn calendar-container__btn--right" title="Next">
          <i className="icon ion-ios-arrow-forward"></i>
        </button>
      </div>
      <div className="calendar-container__body">
        <div className="calendar-table">
          <div className="calendar-table__header">
            <div className="calendar-table__row">
              <div className="calendar-table__col">S</div>
              <div className="calendar-table__col">M</div>
              <div className="calendar-table__col">T</div>
              <div className="calendar-table__col">W</div>
              <div className="calendar-table__col">T</div>
              <div className="calendar-table__col">F</div>
              <div className="calendar-table__col">S</div>
            </div>
          </div>
          <div className="calendar-table__body">
            
          <div class="calendar-table__col calendar-table__inactive">
                  <div class="calendar-table__item">
                    <span>30</span>
                  </div>
                </div>
                <div class="calendar-table__col calendar-table__today">
                  <div class="calendar-table__item">
                    <span>1</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>2</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>3</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>4</span>
                  </div>
                </div>
                <div class="calendar-table__col calendar-table__event">
                  <div class="calendar-table__item">
                    <span>5</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>6</span>
                  </div>
                </div>
              </div>
              <div class="calendar-table__row">
                <div class="calendar-table__col calendar-table__event">
                  <div class="calendar-table__item">
                    <span>7</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>8</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>9</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>10</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>11</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>12</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>13</span>
                  </div>
                </div>
              </div>
              <div class="calendar-table__row">
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>14</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>15</span>
                  </div>
                </div>
                <div class="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--start">
                  <div class="calendar-table__item">
                    <span>16</span>
                  </div>
                </div>
                <div class="calendar-table__col calendar-table__event calendar-table__event--long">
                  <div class="calendar-table__item">
                    <span>17</span>
                  </div>
                </div>
                <div class="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--end">
                  <div class="calendar-table__item">
                    <span>18</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>19</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>20</span>
                  </div>
                </div>
              </div>
              <div class="calendar-table__row">
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>21</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>22</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>23</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>24</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>25</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>26</span>
                  </div>
                </div>
                <div class="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--start">
                  <div class="calendar-table__item">
                    <span>27</span>
                  </div>
                </div>
              </div>
              <div class="calendar-table__row">
                <div class="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--end">
                  <div class="calendar-table__item">
                    <span>28</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>29</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>30</span>
                  </div>
                </div>
                <div class="calendar-table__col">
                  <div class="calendar-table__item">
                    <span>31</span>
                  </div>
                </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
