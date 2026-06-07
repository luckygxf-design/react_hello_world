class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function ActionLink() {
    function handleClick(e) {
        const zhangsan = new Person('zhangsan', 18);
        console.log('zhangsan:', zhangsan);
        e.preventDefault();
        console.log('链接被点击');
    }

    return (
        <a href="#" onClick={handleClick}>
            点我
        </a>
    )
};

export default ActionLink;