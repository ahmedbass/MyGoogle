import { useContext } from "react";
import styled from "styled-components";
import SearchContext from "../store/search-context";

const ToggleSearchSettings = (props) => {
  const searchCtx = useContext(SearchContext);

  const handleMockChange = (e) => {
    searchCtx.setMockOrReal(e.target.checked);
  };

  return (
    <div className="flex flex-col justify-center items-center sm:items-end space-y-1 sm:absolute right-4 bottom-4">
      <Label className="toggle">
        <input type="checkbox" onChange={handleMockChange} checked={searchCtx.useMock} />
        <span className="slider round"></span>
      </Label>
      <p className="whitespace-nowrap text-xs font-bold text-gray-500">Mock search results</p>
    </div>
  );
};

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 22px;

  /* Hide default HTML checkbox */

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: rgb(59 130 246);
    }

    &:focus + .slider {
      box-shadow: 0 0 1px rgb(59 130 246);
    }

    &:checked + .slider:before {
      transform: translateX(22px);
      -webkit-transform: translateX(22px);
      -ms-transform: translateX(22px);
    }
  }

  /* The slider */

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.3s;
    transition: 0.3s;

    :before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
  }

  .round {
    border-radius: 25px;

    :before {
      border-radius: 50%;
    }
  }
`;
export default ToggleSearchSettings;
