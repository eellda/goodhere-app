package bitcamp.goodhere.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import bitcamp.goodhere.dao.BoardLikeDao;
import bitcamp.goodhere.service.BoardLikeService;
import bitcamp.goodhere.vo.BoardLike;

@Service
public class DefaultBoardLikeService implements BoardLikeService {

  @Autowired private BoardLikeDao boardLikeDao;

  @Override
  public void add(BoardLike boardlike) {
    boardLikeDao.insert(boardlike);
  }

  @Override
  public void delete(BoardLike boardlike) {
    boardLikeDao.delete(boardlike);
  }

  @Override
  public void deleteByBoardNo(int boardNo) {
    boardLikeDao.deleteByBoardNo(boardNo);
  }

  @Override
  public boolean checkState(BoardLike boardlike) {
    if (boardLikeDao.checkState(boardlike) == 1) { return true; }
    return false;
  }

  @Override
  public int likeCnt(int boardNo) {
    return boardLikeDao.likeCnt(boardNo);
  }

  @Override
  public int countLikerAllContnet(int memberNo) {
    return boardLikeDao.countLikerAll(memberNo)+boardLikeDao.countLikerAll(memberNo);
  }
}
