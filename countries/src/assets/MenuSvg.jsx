import { styled } from "styled-components";

    const StyledSvg = styled.svg`
      overflow: visible;
      transform: scale(1.6);

      @media screen and (max-width: 768px) {
        transform: scale(1.1);
      }

    `

    const rectStyles = {
      transformOrigin: 'center',
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '150ms',
    }

const MenuSvg = ({ openNavigation }) => {

    return (
      <StyledSvg
        width="25"
        height="12"
        viewBox="0 0 25 12"
      >
        <rect
          style={rectStyles}
          y={openNavigation ? "5" : "0"}
          width="25"
          height="3"
          rx="1"
          fill={'white'}
          transform={`rotate(${openNavigation ? "45" : "0"})`}
        />
        <rect
          style={rectStyles}
          y={openNavigation ? "5" : "10"}
          width="25"
          height="3"
          rx="1"
          fill={'white'}
          transform={`rotate(${openNavigation ? "-45" : "0"})`}
        />
      </StyledSvg>
    );
  };
  
  export default MenuSvg;