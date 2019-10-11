import { Divider, Avatar } from "antd";
const Author = () => {
  return (
    <div>
      <div className="author-div comm-box">
        <Avatar
          size={100}
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570731028860&di=71ba4e4049111451e24284e496e16bd3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F04%2F20161104012334_sruKx.jpeg"
        />
      </div>
      <div className="author-introduction">
        全栈程序员，主要研发，Node Mysql Mongodb RN React Vue Java Swagger
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="qq" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
      </div>
    </div>
  );
};

export default Author;
