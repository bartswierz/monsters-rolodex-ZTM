// import { Component } from "react";

import { type } from "os";
import { ChangeEvent } from "react";
import "./search-box.styles.css";

//Option 1 - extending
//extends adds/inherits 'onChangeHandler: (a: string) => void;' to ISearchBoxProps
// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   // This ? is for optional types, we can either get a String(if given) or Null
//   placeholder?: string;
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void;
// }

///*
//Option 2 - Overload - JavaScript will automatically combine the two
//extends adds/inherits 'onChangeHandler: (a: string) => void;' to ISearchBoxProps
/*
interface ISearchBoxProps {
  className: string;
  // This ? is for optional types, we can either get a String(if given) or Null
  placeholder?: string;
}

interface ISearchBoxProps {
  onChangeHandler: (a: string) => void;
}
*/
//*/

/*
type CanadianAddress = {
  street: string;
  province: string;
};

type USAddress = {
  street: string;
  state: string;
};

type ItalianAddress = {
  street: string;
  region: string;
};
*/

//create a UNION type allowing province for Canadian and State for US
//type Address = CanadianAddress | USAddress | ItalianAddress;

//US - Works
// const Address: Address = {
//   street: "adas",
//   state: "adasd",
// };

//Canadian
// const Address: Address = {
//   street: "adas",
//   province: "asdasdd",
// };

//Italian
// const Address: Address = {
//   street: "adas",
//   region: "asdasdd",
// };

// const Address: Address = {
//   street: "adasdas",
//   region: "asdfasdf",
// };

// const name: string = "12345123";
// const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {};

type SearchBoxProps = {
  className: string;
  // This ? is for optional types, we can either get a String(if given) or Null
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeHandler: (a: string) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input className={`search-box ${className}`} type="search" placeholder={placeholder} onChange={onChangeHandler} />
);

export default SearchBox;

/* CLASS VERSION
class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
*/
