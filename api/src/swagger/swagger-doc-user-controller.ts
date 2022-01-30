module.exports = {
  /**
   * @swagger
   * /registration:
   *   post:
   *     description: Sign-up user
   *     parameters:
   *     - name: lastname
   *       description: user lastname
   *       in: formData
   *       required: true
   *       type: string
   *     - name: firstname
   *       description: user firstname
   *       in: formData
   *       required: true
   *       type: string
   *     - name: email
   *       description: user email
   *       in: formData
   *       required: true
   *       type: string
   *     - name: password
   *       description: password
   *       in: formData
   *       required: true
   *       type: string
   *     - name: confirm password
   *       description: confirm password
   *       in: formData
   *       required: true
   *       type: string
   *     responses:
   *       200:
   *           description :Success
   *       404:
   *          description:failed
   * /login:
   *   post:
   *     description: Sign-in user
   *     parameters:
   *     - name: email
   *       description: user email
   *       in: formData
   *       required: true
   *       type: string
   *     - name: password
   *       description: user password
   *       in: formData
   *       required: true
   *       type: string
   *     responses:
   *       200:
   *           description :Success
   *       404:
   *          description:failed
   *
   */
};
