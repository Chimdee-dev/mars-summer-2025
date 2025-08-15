
function Profile({ img, name, age, gender, email }) {
    return (
        <div className='bg-voilet-100 w-[400px] p-5 rounded-lg shadow-lg border-violet-400 border-3 m-auto mt-10'>
            <img width={300} src={img} alt="" />
            <p className='text-blue-500' >Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <i>Email: {email}</i>
        </div>
    )
}
export default Profile;