import React from "react";

const Challenge = ({ todos }) => {
  const completedCount = todos.filter((todo) => todo.completed).length; // 완료된 항목
  const totalCount = todos.length; // 총 항목 수

  const isChallengeComplete = completedCount === totalCount && totalCount > 0; // 모든 항목 완료 여부

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>챌린지 모드</h2>
      <p style={styles.info}>총 할 일: {totalCount}</p>
      <p style={styles.info}>완료된 할 일: {completedCount}</p>
      {isChallengeComplete ? (
        <h3 style={styles.success}>🎉 축하합니다! 모든 할 일을 완료했습니다!</h3>
      ) : (
        <h3 style={styles.pending}>아직 할 일이 남아있습니다. 계속 진행하세요!</h3>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "20px",
  },
  info: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#555",
  },
  success: {
    fontSize: "1.5rem",
    color: "green",
    marginTop: "20px",
  },
  pending: {
    fontSize: "1.5rem",
    color: "red",
    marginTop: "20px",
  },
};

export default Challenge;
