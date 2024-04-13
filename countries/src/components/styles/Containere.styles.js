import { styled } from "styled-components";

export const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const RowContainer = styled(Container)`
    flex-direction: row;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Two columns at a certain screen width */
    gap: 20px; /* Adjust as needed */

    @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
    }
`

export const InfoContainer = styled(GridContainer)`
    
    grid-template-columns: repeat(2, 1fr);
`