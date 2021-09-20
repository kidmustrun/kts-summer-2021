import { useEffect, useState } from "react";

import "antd/dist/antd.css";
import { StarOutlined, ForkOutlined } from "@ant-design/icons";
import GitHubStore from "@store/GitHubStore";
import { Statistic, Row, Col, Typography, Breadcrumb } from "antd";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

const RepoPage = () => {
  const { owner, name } = useParams<{ owner?: string; name?: string }>();
  const [repo, setRepo] = useState<any | []>([]);
  let history = useHistory();
  function handleClick() {
    history.push("/repos");
  }
  useEffect(() => {
    const gitHubStore = new GitHubStore();
    gitHubStore
      .getRepo({
        owner: owner,
        repo: name,
      })
      .then((result) => {
        setRepo(result);
      });
    return;
  });
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item onClick={handleClick}>
          <a href="">Repos</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{repo.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Title>{`${owner} / ${name}`}</Title>
      <p>{repo.description}</p>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Stars"
            value={repo.stargazers_count}
            prefix={<StarOutlined />}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Forks"
            value={repo.forks_count}
            prefix={<ForkOutlined />}
          />
        </Col>
      </Row>
    </>
  );
};
export default RepoPage;
