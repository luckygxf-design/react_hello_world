function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}

function Url(props) {
    return <h1>网站地址：{props.name}</h1>;
}

function BlogInf() {
    return (
    <div>
        <Name name='guanxianseng的网站'/>
        <Url name='https://www.baidu.com'/>
    </div>
    );
}

export default BlogInf;