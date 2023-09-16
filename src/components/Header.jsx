import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";

const Header = () => {

  const navigate=useNavigate()


  const handleSearch=(e)=>{

 e.preventDefault()
let inputValue=e.target[0].value
//console.log(inputValue)
navigate(`/results?search_query=${inputValue}`)
e.target[0].value=' '
  }
  return (
    <header className="flex justify-between items-center p-[17px] bg-[#0f0f0f] text-white">
      <Link className="flex items-center gap-3 text-3xl" to={"/"}>
        <img width={50} src="/youtube_logo.png" />
        <h1>Youtube</h1>
      </Link>

      <form
      onSubmit={handleSearch}
      className="bg-white text-black rounded flex items-center">
        <input
          className=" px-4 py-1 rounded outline-none"
          placeholder="Ara"
          type="text"
        />
        <button className="mr-2 text-2xl rounded-full p-1 transition duration-300  hover:bg-gray-300">
          <AiOutlineSearch />
        </button>
      </form>

      <AiFillBell className="text-xl cursor-pointer" />
    </header>
  );
};

export default Header;
