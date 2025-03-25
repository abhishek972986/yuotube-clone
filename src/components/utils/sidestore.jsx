import { FaHome, FaCode, FaMusic, FaGraduationCap, FaPodcast, FaFilm, FaGamepad, FaBroadcastTower, FaDumbbell, FaTshirt, FaSmile, FaTheaterMasks, FaBitcoin } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";

export const Categories = [
  { name: 'New', icon: <FaHome /> },
  { name: 'JS Mastery', icon: <FaCode /> },
  { name: 'Coding', icon: <FaCode /> },
  { name: 'ReactJS', icon: <FaCode /> },
  { name: 'NextJS', icon: <TbBrandNextjs /> },
  { name: 'Music', icon: <FaMusic /> },
  { name: 'Education', icon: <FaGraduationCap /> },
  { name: 'Podcast', icon: <FaPodcast /> },
  { name: 'Movie', icon: <MdOndemandVideo /> },
  { name: 'Gaming', icon: <FaGamepad /> },
  { name: 'Live', icon: <FaBroadcastTower /> },
  { name: 'Sport', icon: <FaDumbbell /> },
  { name: 'Fashion', icon: <FaTshirt /> },
  { name: 'Beauty', icon: <FaSmile /> },
  { name: 'Comedy', icon: <FaTheaterMasks /> },
  { name: 'Gym', icon: <FaDumbbell /> },
  { name: 'Crypto', icon: <FaBitcoin /> },
];
