import { useState } from 'react'
import { styled } from 'styled-components'
import { Input } from './styles/Input.styles'
import { Options } from './styles/Dropdown.styles';

const Container = styled.div`
  position: relative;
  min-width: 250px;
  width: 70%;
  margin-bottom: 400px;
`;

const Option = styled.div`
  padding: 8px;
  cursor: pointer;
  background-color: ${props => props.selected ? props.theme.colors.main.darker : 'transparent'};
  color: ${props => props.selected && props.theme.colors.lightText};

  &:hover {
    background-color: ${props => props.selected ? props.theme.colors.main.darker : '#052d577a'};
    color: ${props => props.theme.colors.lightText};
  }
`;


const DropdownSearch = ({options, setSelectedCountry}) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [searchInput, setSearchInput] = useState('')
    const [filteredOptions, setFilteredOptions] = useState(options)
    const [isTyping, setIsTyping] = useState(false)

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        const filtered = options.filter(option =>
          option.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
      };
    
      const handleSelectOption = (option) => {
        setSelectedCountry(option);
        setSelectedOption(option)
        setSearchInput('');
      };

    return (
        <Container>
            <Input
                type="text"
                value={searchInput}
                onChange={handleSearch}
                onFocus={() => setIsTyping(true)}
                placeholder="Search..."
            />
            {isTyping && 
                <Options>
                    {filteredOptions.map((option, index) => (
                    <Option key={index} onClick={() => handleSelectOption(option)} selected={option === selectedOption && true}>
                        {option}
                    </Option>
                    ))}
                </Options>
            }
        </Container>
    )
}

export default DropdownSearch