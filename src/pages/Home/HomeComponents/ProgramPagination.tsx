import React from 'react'
import styled from 'styled-components'
const ProgramPagination = () => {
  return (
    <ProgramPaginationContainer>
        <Pagination/>
        <Pagination/>
    </ProgramPaginationContainer>
  )
}
const ProgramPaginationContainer = styled.div`
    display: flex;
    gap: 10px;
`
const Pagination = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: gray;

`

export default ProgramPagination