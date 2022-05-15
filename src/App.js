import {BrowserRouter, Routes, Route} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import BookingComplete from "./components/BookingComplete/BookingComplete";
import HotelDetails from "./components/HotelDetails/HotelDetails";
import Hotels from "./components/Hotels/Hotels";
import Payment from "./components/Payment/Payment";
import hotelData from "./seeds/hotels.json";
import users from "./seeds/users.json";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hotels data={hotelData} />}/>
        <Route path="/:id" element={<HotelDetails hotels={hotelData}/>} />
        <Route path="/:id/payment" element={<Payment hotels={hotelData}/>} />
        <Route path="/auth" element={<Auth users={users} />}/>
        <Route path="/mybookings" element={<BookingComplete/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
