import styled from "styled-components";
import vars from "../../../styles/Vars";

export const CalendarWrapper = styled.div`
  position: absolute;
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: #fff;
  z-index: 2;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05),
    0px 2px 10px rgba(0, 0, 0, 0.05), 0px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  .calendar-footer {
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    border-top: 1px solid ${vars.colors.gray[6]};
    button {
      width: 134px;
    }
  }
  .react-calendar {
    z-index: 2;
    max-width: 328px;
    padding: 20px 24px;
    &__tile {
      border: none;
      background: #fff;
      font-size: 14px;
      line-height: 16px;
      font-weight: 500;
      color: ${vars.colors.secondary.black};
      padding: 12px 0;
      &:hover {
        background-color: ${vars.colors.gray[2]};
        border-radius: 20px;
      }
      &--hover {
        background-color: ${vars.colors.gray[2]};
      }
      &--range {
        background-color: ${vars.colors.gray[2]};
      }
      &--rangeStart {
        background-color: ${vars.colors.primary.cerevelBlue};
        border-radius: 20px;

        color: #fff;
        &:hover {
          background-color: ${vars.colors.hover.cerevelBlue};
        }
      }
      &--rangeEnd {
        background-color: ${vars.colors.primary.cerevelBlue};
        border-radius: 20px;

        color: #fff;
        &:hover {
          background-color: ${vars.colors.hover.cerevelBlue};
        }
      }
      &--now {
        background-color: ${vars.colors.gray[100]};
        border-radius: 20px;
      }
    }
    &__navigation {
      margin-bottom: 12px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: relative;
      &__label {
        background-color: #fff;
        border: none;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: ${vars.colors.gray[70]};
      }
      &__prev-button {
        background-color: #fff;
        border: none;
        background: url("/svg/arrow-left.svg") no-repeat center;
        font-size: 0;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 3px;
      }
      &__next-button {
        border: none;
        background-color: #fff;
        background: url("/svg/arrow-right.svg");
        font-size: 0;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 3px;
        right: 0;
      }
      &__prev2-button {
        display: none;
      }
      &__next2-button {
        display: none;
      }
    }
    &__month-view {
      &__weekdays {
        &__weekday {
          text-align: center;
          padding: 10px 0 14px 0;
          margin-bottom: 4px;
          abbr {
            text-decoration: none;
            font-size: 14px;
            line-height: 16px;
            font-weight: 500;
            color: ${vars.colors.secondary.black};
          }
        }
      }
      &__days__day--neighboringMonth {
        color: ${vars.colors.gray[500]};
      }
    }
  }
`;
