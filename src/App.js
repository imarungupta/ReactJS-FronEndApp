import './App.css';
import StdAppBar from './student_component/StdAppBar';
import StudentEnrolmentForm from './student_component/StudentEnrolmentForm';

function App() {
  return (
    <div className="App">
        <StdAppBar></StdAppBar>    
        <StudentEnrolmentForm></StudentEnrolmentForm>
    </div>
  );
}
export default App;
