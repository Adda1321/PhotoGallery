import React,{useState} from 'react';
import logo from './logo.svg'
import Check from './components/testing'
import Greet from './components/Greet'
import HookMouse from './components/HookMouse'
import Hooks from './components/Hooks'
import Democomponent from './components/democomponent'
import MyComponent from './components/FetchingData'
import { UserProvider } from './components/userContextt'
import ComponentC from './components/ComponentC'
import Title from './components/Title';
import UploadForm from './galleryProject/UploadForm'
import FetchingD from './components/DataFetchingReducer'
import UseRef from './components/useRef'
import UserForm from './components/userForm'
import './App.css';
import DocTitleOne from './hooks/DocTitleOne';
import Main from './Pages/Main'
import ImageGrid from './galleryProject/ImageGrid';
import InputButton from './Practice/InputButton'
import PFPractice from './Practice/PFPractice';
import Modal from './galleryProject/Modal'

export const ChannelContext = React.createContext()


function App() {
  const [selected, setselected] = useState(null)
  return (
    <div className="App">
      {/* <Check /> */}
      {/* <Greet /> */}
      <Hooks /> 
      {/* <HookMouse /> */}
      {/* <FData />  */}
      {/* <UserForm /> */}
      {/* <Main /> */}
       {/* <Title />
      <UploadForm />
      <ImageGrid setselected={setselected} />
      {selected && <Modal selected={selected} setselected={setselected} />} */}
      {/* <FetchingD /> */}
      {/* <DocTitleOne /> */}
      {/* <UseRef /> */}
      {/* <Democomponent /> */}
      {/* <UserProvider value={"Adil"}>
        <ChannelContext.Provider value={'Mustafa'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserProvider>  */}
    {/* PRACTICE */}
    {/* <InputButton /> */}
{/* <PFPractice /> */}
    {/* <Democomponent /> */}
{/* <InputButton /> */}
{/* <MyComponent /> */}
    </div>
  );
}
export default App;