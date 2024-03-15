import CurrentListComponent from "../../components/CurrentList/CurrentList";
import LayoutSidebar from "../../components/LayoutSidebar/LayoutSidebar";
import People from "../../components/People/Peoples";
import TableListComponent from "../../components/TableList/TableList";


export default function ListPage() {
    return <div>
        <LayoutSidebar />
        <People />
        <CurrentListComponent />
        <TableListComponent />
    </div>
 
  }