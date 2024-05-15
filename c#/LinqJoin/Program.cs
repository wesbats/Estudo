namespace LinqJoin.Models{
    using System;

    public class Student
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int Age { get; set; }
        public int TeacherId { get; set; }
    }

    public class Teacher
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Subject { get; set; }
    }

    public class StudentResponse
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Teacher { get; set; }
        public string? Subject { get; set; }
    }
}

namespace LinqJoin
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.Json;
    using LinqJoin.Models;

    public class Program
    {
        static void Main()
        {
            string stringStudents = @"[
                { 'Id': 1, 'Name': 'Alice', 'Age': 22, 'TeacherId': 201 },
                { 'Id': 2, 'Name': 'Bob', 'Age': 23, 'TeacherId': 202 },
                { 'Id': 3, 'Name': 'Charlie', 'Age': 24, 'TeacherId': 201 },
                { 'Id': 4, 'Name': 'David', 'Age': 22, 'TeacherId': 203 }
            ]".Replace("\'", "\"");
            
            string stringTeachers = @"[
                { 'Id': 201, 'Name': 'Smith', 'Subject': 'Computer Science' },
                { 'Id': 202, 'Name': 'Johnson', 'Subject': 'Mathematics' },
                { 'Id': 203, 'Name': 'Brown', 'Subject': 'Physics' }
            ]".Replace("\'", "\"");

            var students = JsonSerializer.Deserialize<List<Student>>(stringStudents);
            var teachers = JsonSerializer.Deserialize<List<Teacher>>(stringTeachers);

            var query = from student in students
                        join teacher in teachers on student.TeacherId equals teacher.Id
                        select new StudentResponse
                        {
                            Id = student.Id,
                            Name = student.Name,
                            Teacher = teacher.Name,
                            Subject = teacher.Subject
                        };

            foreach (var student in query)
            {
                Console.WriteLine($"Name: {student.Name}");
                Console.WriteLine($"Teacher: {student.Teacher}");
                Console.WriteLine($"Subject: {student.Subject}");
                Console.WriteLine();
            }

            Console.WriteLine("Type of query: " + query.GetType());
            var firstItem = query.FirstOrDefault();
            Console.WriteLine("Type of item in query: " + firstItem?.GetType());
        }

    }
}
