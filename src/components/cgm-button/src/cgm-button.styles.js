// cgm-button.lit.scss.js (or better: cgm-button.styles.js)
import { css } from "lit";

const myStyles = css`
  button {
    border-radius: 4px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: yellow;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
      border-color: gray
    }

    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }

  @media (prefers-color-scheme: light) {
    button {
      background-color: red
    }
  }
`;

export default myStyles;