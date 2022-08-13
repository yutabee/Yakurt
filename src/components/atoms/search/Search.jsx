import React, { memo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

export const Search = memo(()=> {
    return (
        <SSearchBox>
            <SSearchBar>
                <SearchIcon />
                <SInput
                    placeholder="Search"
                />
            </SSearchBar>
        </SSearchBox>
      )
 })
 
const SSearchBox = styled.div`    
   display: flex;
    justify-content: center;
    height: 40px;
`

const SSearchBar = styled.div`
    display: flex;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 999px;
    background-color: #f0f2f5;
`

const SInput = styled.input`
    border: none !important;
    background-color: #f0f2f5;
    width: 300px;
    margin-left: 5px;
    &:focus{
        outline-width: 0;
    }
    &::placeholder{
    text-align: left;
    font-size: 15px;
    }
`