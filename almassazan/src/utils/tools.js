const pathSlicer = (path) => path.split("/").filter(Boolean);
const fetchData = async (
  Url,
  setData = (value) => {
    console.log("utils -> tools -> fetchData : default function -> setData :", value);
  },
  setLoading = (value) => {
    console.log("utils -> tools -> fetchData : default function -> setLoading :", value);
  },
  setError = (value) => {
    console.log("utils -> tools -> fetchData : default function -> setError :", value);
  }
) => {
  setLoading(true);
  setError(null);
  try {
    const response = await fetch(Url, { cache: "no-store" });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`${data.message} , status:${response.status}`);
    }

    setData(data.data);
  } catch (error) {
    setData(null);
    setError(error);
  } finally {
    setLoading(false);
  }
};

const getMe = async (filter, setData, setLoading, setError) => {
  setLoading(true);
  setError(null);
  try {
    await fetch("/api/auth/refresh", { cache: "no-store" });
    const response = await fetch("/api/auth/getMe", { cache: "no-store" });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`${data.message} , status:${response.status}`);
    }
    if (filter === "all") {
      setData(data.data);
    } else if (filter === "role") {
      setData(data.data.role);
    } else {
      throw new Error("( GetMe function )==> filter is not valid !!");
    }
  } catch (error) {
    setData(null);
    console.log(` utils -> tools -> getMe function: error ==> ${error}`);
    setError(error);
  } finally {
    setLoading(false);
  }
};
let reload = false;
const setReload = () => {
  reload = !reload;
};
export { pathSlicer, fetchData, getMe, setReload, reload };
