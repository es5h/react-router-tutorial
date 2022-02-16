import {useParams} from "react-router-dom";

const data = {
  data1: {
    name: 'man1',
    description: 'description1',
  },
  data2: {
    name: 'man2',
    description: 'description2',
  }
}

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p> there is no profile. </p>
      )}
    </div>
  )
}

export default Profile;