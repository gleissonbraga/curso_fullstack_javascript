import Profile from "./components/Profile"

export default function App() {
  return (
    <div className="app">
      <Profile 
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="Gleisson"
        bio="Full-Stack Javascript developer at Acme Inc."
        email="bragagleisson@gmail.com"
        phone="5511987654321"
        githubUrl="https://github.com/gleissonbraga"
        linkedinUrl="https://www.linkedin.com/in/gleisson-braga/"
        twitterUrl="https://x.com/gleissonbm"
      />
    </div>
  )
}