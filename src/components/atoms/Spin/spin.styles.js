import { css } from "lit";

export default css`
  @keyframes fade-in {
    100% {
      transform: rotate(1turn);
    }
  }
  .spin {
    display: flex;
    align-items: center;
  }

  .spin > svg {
    display: inline-block;

    color: var(--color-primary);
    animation: fade-in 1s infinite linear;
  }

  .spin--large {
    width: 2rem;
    height: 2rem;
  }

  .spin--medium {
    width: 1.6rem;
    height: 1.6rem;
  }

  .spin--small {
    width: 1rem;
    height: 1rem;
  }
`;
