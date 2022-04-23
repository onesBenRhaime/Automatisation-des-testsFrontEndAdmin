const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
});

const { email, password, error } = data;

const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setData({ ...data, error: null });
        const res = await axios.post(
            "http://localhost:3000/api/user/login",
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
    } catch (err) {
        setData({ ...data, error: err });
    }
};