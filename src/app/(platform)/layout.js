import LeftNavBar from './components/leftNavBar';
import TopNavBar from './components/topNavBar';


export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
        <div className='px-16 py-16 flex justify-between h-full bg-platform-bg'>
            <LeftNavBar></LeftNavBar>
            <div className="w-9/12 bg-white rounded-2xl px-12 py-12">
            <TopNavBar></TopNavBar>
            {children}
            </div>
        </div>

    )
  }