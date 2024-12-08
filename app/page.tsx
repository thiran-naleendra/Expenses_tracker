// import Dashboard from '../pages/Dashboard';
import Login from '../components/login';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Income & Expense Tracker</h1>
      
      <Login/>
      {/* <Dashboard /> */}
    </main>
  );
}