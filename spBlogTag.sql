use blogs;
delimiter //
create procedure spBlogTag(blogid Int)
BEGIN
	select t1.ID, t1.Name, t2.blogID, t2.tagID
    from Tags t1 join BlogTags t2
    ON t1.ID = t1.BlogID;
    END//