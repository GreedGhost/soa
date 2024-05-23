import numpy as np
from sklearn.linear_model import LinearRegression

class SkillRanker:
    def __init__(self):
        self.model = LinearRegression()

    def train(self, X_train, y_train):
        self.model.fit(X_train, y_train)

    def predict(self, skills):
        return self.model.predict(skills)

    def adaptCV(self, skills, offer_skills):
        skill_features = self._extract_features(skills, offer_skills)
        skill_importance = self.predict(skill_features)
        sorted_skills = [skill for _, skill in sorted(zip(skill_importance, skills), reverse=True)]
        return sorted_skills

    def _extract_features(self, skills, offer_skills):
        # Convert skills to a feature matrix. Here we simply return indices for illustration.
        feature_matrix = np.array([
            [offer_skills.index(skill) if skill in offer_skills else len(offer_skills)]
            for skill in skills
        ])
        return feature_matrix

def main():
    # Example training data
    X_train = np.array([
        [0],  # Python
        [1],  # Java
        [2],  # C++
        [3],  # SQL
        [4]   # R
    ])
    y_train = np.array([5, 4, 3, 2, 1])  # Arbitrary importance scores

    # Instantiate and train the SkillRanker
    ranker = SkillRanker()
    ranker.train(X_train, y_train)

    # Define the offer skills and skills list
    offer_skills = ['Python', 'Java']
    skills = ['SQL', 'Java', 'R', 'C++', 'Python']

    # Adapt the CV
    sorted_skills = ranker.adaptCV(skills, offer_skills)
    print(sorted_skills)

if __name__ == "__main__":
    main()


