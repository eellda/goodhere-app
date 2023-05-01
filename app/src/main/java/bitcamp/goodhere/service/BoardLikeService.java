package bitcamp.goodhere.service;

import bitcamp.goodhere.vo.BoardLike;

public interface BoardLikeService {

  void add(BoardLike boardlike);
  void delete(BoardLike boardlike);
  void deleteByBoardNo(int boardNo);
  boolean checkState(BoardLike boardlike);
  int likeCnt(int boardNo);
  int countLikerAllContnet(int memberNo);
}
