import { useState } from "react";
import { useEffect } from "react";
import { useServer } from "../../hooks/user-server";
import { getLastPageFromLinks } from "./utils/get-last-page-from-links";
import styled from "styled-components";
import { debounce } from "./utils/debounce";
import { useMemo } from "react";
import { PostCard } from "./components/PostCard/postcard";
import { Pagination } from "./components/pagination/pagination";
import { PAGINATION_LIMIT } from "../../constants/pagination-limit";
import { Search } from "./components/search/search";
const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const requestServer = useServer();
  useEffect(() => {
    requestServer("fetchPosts", searchPhrase, page, PAGINATION_LIMIT).then(
      ({ res: { posts, links } }) => {
        setPosts(posts);
        setLastPage(getLastPageFromLinks(links));
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestServer, page, shouldSearch]);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    console.log(searchPhrase);
    startDelayedSearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <Search searchPhrase={searchPhrase} onChange={onSearch} />
      {posts.length ? (
        <div className="post-list">
          {posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
            <PostCard
              key={id}
              id={id}
              title={title}
              imageUrl={imageUrl}
              publishedAt={publishedAt}
              commentsCount={commentsCount}
            />
          ))}
        </div>
      ) : (
        <div className="no-posts-found">Статьи не найдены</div>
      )}
      {lastPage > 1 && posts.length > 0 && (
        <Pagination page={page} setPage={setPage} lastPage={lastPage} />
      )}
    </div>
  );
};

export const Main = styled(MainContainer)`
  & .post-list {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }
`;
