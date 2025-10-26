
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { reload } from 'firebase/auth/web-extension';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Home = () => {
    const data = useSelector(state =>(state.userInfo.value))
    console.log(data);
    // const [load, setLoad] = useState(false);
    const [verify, setverify] = useState(false);

    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if(user.emailVerified)
        setverify(true)
    
});
    
    // useEffect(()=>{
    //     if(data.emailVerified){
    //         setverify(true)
    //     }
    // },[])

    return (
        <div>
            {
                verify ? 
                <p>Home</p> :
                <p>Please verify your email</p>
            }
        </div>
    );
};

export default Home;