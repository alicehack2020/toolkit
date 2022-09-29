   const [data, setData] =useState([]);
     const [status,setStaus]=useState("")
     const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmdlc2gyMDQyQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9hbGljZWhhY2syMDIwIiwiaWF0IjoxNjY0MzUzOTQxLCJleHAiOjE2NjQ3ODU5NDF9.d_4zQfEqngzQXq6HZgx0C579-exiWT58PsgQQgA1yJw"
   
     
     useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://upayments-studycase-api.herokuapp.com/api/products',{
                method:"GET",
                headers:new Headers({
                    'Authorization': 'Bearer '+token, 
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            });
            const data = await res.json();
            console.log(data);
            setData(data.products);
            setStaus(data.message)
        };
        fetchProducts();
    }, []);