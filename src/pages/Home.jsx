import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex items-center justify-center h-[80vh]">
        <h1 className="text-3xl font-bold">
          Welcome to Attendance System
        </h1>
      </div>
    </div>
  );
}

export default Home;