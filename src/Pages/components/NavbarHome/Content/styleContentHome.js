import styled, { css } from 'styled-components'

const h3 = css`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #32325d;
`

const p = css`
  color: #6b7c93;
`

const hover = css`
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  color: black;
  &:hover {
    color: #1100ff;
    opacity: 0.7;
  }
`

export const CompanyWrapper = styled.div`
  padding: 16px 16.5px;
  white-space: nowrap;
  .primary {
    > li {
      ${h3}
      ${hover}
      p {
        ${p}
        margin-top: 10px;
      }
      display: flex;
      align-items: center;
      & + li {
        margin-top: 22px;
      }
      > span {
        margin-right: 13px;
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        &.access {
          background: #bde958;
        }
        &.about {
          background: #f5a64c;
        }
        &.system {
          background: #f2f555;
        }
        &.portfolio {
          background: #6cf312;
        }
      }
      > span:hover {
        border: 2px red solid;
      }
    }
  }

  .secondary {
    margin-top: 64.5px;
    li {
      display: flex;
      align-items: center;
      &:not(.title) {
        ${hover}
        margin-top: 21px;
        margin-left: 30px;
        color: #424770;

        .new-tag {
          text-transform: uppercase;
          font-size: 10px;
          background: #646ddf;
          border-radius: 6px;
          padding: 2px 4.5px;
          color: #fff;
          margin-left: 6px;
        }
        .arrow {
          margin-left: 6px;
          font-weight: bold;
          transform: scaleX(0.7) scaleY(1.1);
        }
      }

      &:nth-child(2) {
        margin-top: 30.2px;
        font-weight: 500;
      }
    }

    li.title {
      ${h3}
      .title-icon {
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 3.5px;
        margin-right: 13px;
        background: #505e7d;
      }
    }
  }
`

export const ProductsWrapper = styled.div`
  padding: 16px 16.5px;
  white-space: nowrap;
  .primary {
    > li {
      ${h3}
      ${hover}
      p {
        ${p}
        margin-top: 10px;
      }
      display: flex;
      align-items: center;
      & + li {
        margin-top: 22px;
      }
      > span {
        margin-right: 13px;
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        &.bordar {
          background: #beaef0;
        }
        &.cortarlaser {
          background: #ffd876;
        }
        &.gravarlaser {
          background: #fba2e8;
        }
        &.arte {
          background: #80b9f9;
        }
        &.produtos {
          background: #fd0101;
        }
        &.terminal {
          background: #5355ba;
        }
        > span:hover {
          border: 2px red solid;
        }
      }
    }
  }

  .secondary {
    margin-top: 64.5px;
    li {
      display: flex;
      align-items: center;
      &:not(.title) {
        ${hover}
        margin-top: 21px;
        margin-left: 30px;
        color: #424770;

        .new-tag {
          text-transform: uppercase;
          font-size: 10px;
          background: #646ddf;
          border-radius: 6px;
          padding: 2px 4.5px;
          color: #fff;
          margin-left: 6px;
        }
        .arrow {
          margin-left: 6px;
          font-weight: bold;
          transform: scaleX(0.7) scaleY(1.1);
        }
      }

      &:nth-child(2) {
        margin-top: 30.2px;
        font-weight: 500;
      }
    }

    li.title {
      ${h3}
      .title-icon {
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 3.5px;
        margin-right: 13px;
        background: #505e7d;
      }
    }
  }
`

export const DevelopersWrapper = styled.div`
  padding: 16px 16.5px;
  white-space: nowrap;
  .primary {
    > li {
      ${h3}
      ${hover}
      p {
        ${p}
        margin-top: 10px;
      }
      display: flex;
      align-items: center;
      & + li {
        margin-top: 22px;
      }
      > span {
        margin-right: 13px;
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        &.bordar {
          background: #beaef0;
        }
        &.cortarlaser {
          background: #ffd876;
        }
        &.gravarlaser {
          background: #fba2e8;
        }
        &.arte {
          background: #80b9f9;
        }
        &.servicos {
          background: #fd0101;
        }
        &.terminal {
          background: #5355ba;
        }
        > span:hover {
          border: 2px red solid;
        }
      }
    }
  }

  .secondary {
    margin-top: 64.5px;
    li {
      display: flex;
      align-items: center;
      &:not(.title) {
        ${hover}
        margin-top: 21px;
        margin-left: 30px;
        color: #424770;

        .new-tag {
          text-transform: uppercase;
          font-size: 10px;
          background: #646ddf;
          border-radius: 6px;
          padding: 2px 4.5px;
          color: #fff;
          margin-left: 6px;
        }
        .arrow {
          margin-left: 6px;
          font-weight: bold;
          transform: scaleX(0.7) scaleY(1.1);
        }
      }

      &:nth-child(2) {
        margin-top: 30.2px;
        font-weight: 500;
      }
    }

    li.title {
      ${h3}
      .title-icon {
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 3.5px;
        margin-right: 13px;
        background: #505e7d;
      }
    }
  }
`
/*
padding: 32px 35px;
  white-space: nowrap;
  .primary {
    li {
      display: flex;
      align-items: center;
      div {
        ${hover}
        margin-left: 19px;
        h3 {
          ${h3}
        }
        p {
          ${p}
          margin-top: 10px;
        }
      }
      & + li {
        margin-top: 32px;
      }
      span {
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        &.payments {
          background: #80b9f9;
        }
        &.billing {
          background: #64e5a7;
        }
        &.connect {
          background: #55d3f5;
        }
      }
    }
  }
  .secondary {
    margin-top: 60px;
    li {
      ${hover}
      display: flex;
      & + li {
        margin-top: 28px;
      }
      h3 {
        ${h3}
        margin-left: 16px;
      }
      p {
        ${p}
        margin-left: 14px;
      }
      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        &.sigma {
          background: #beaef0;
        }
        &.atlas {
          background: #ffd876;
        }
        &.radar {
          background: #fba2e8;
        }
        &.issuing {
          background: #80b9f9;
        }
        &.terminal {
          background: #5355ba;
        }
      }
    }
  }
 */
