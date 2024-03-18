import ChildrensDataComponent from "../../components/ChildrensData/ChildrensData";
import LayoutSidebar from "../../components/LayoutSidebar/LayoutSidebar";
import PersonalComponent from "../../components/PersonalData/Personal";
import SpousesDetalisComponent from "../../components/SpousesDetails/SpousesDetalis";


export default function EditPage() {
    return <div style={{width: "1095px"}}>
        <LayoutSidebar />
       <PersonalComponent />
       <SpousesDetalisComponent />
       <ChildrensDataComponent />
    </div>
 
  }