import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <p className="text-2xl font-semibold text-gray-800 mb-4">Hello World</p>
        <Button className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300" />
      </div>
    </div>
  );
}

export default App;
