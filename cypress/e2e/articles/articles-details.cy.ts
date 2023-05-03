let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('и видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.info').should('exist');
  });
  it('и видит список рекоммендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it('и оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.content').should('have.length', 1);
  });
  it('и ставит оценку', () => {
    cy.getByTestId('ArticleDetails.info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
